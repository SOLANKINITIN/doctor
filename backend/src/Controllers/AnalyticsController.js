const { User, Hospital, Doctor, Patient } = require("Models");
const { handleError } = require("Helper");
const moment = require("moment-timezone");

const getAnalytics = async (req, res, next) => {
  try {
    let startTime = req.query.startTime;
    let endTime = req.query.endTime;

    console.log(startTime, endTime);

    startTime = moment(startTime)
      .startOf("day")
      .toDate();
    endTime = moment(endTime)
      .endOf("day")
      .toDate();

    console.log(endTime, startTime);

    const getGroupData = table => {
      return table.aggregate([
        { $match: { createdAt: { $gte: startTime, $lte: endTime } } },
        {
          $group: {
            _id: {
              $dateToString: {
                date: "$createdAt",
                format: "%Y-%m-%d"
              }
            },
            count: { $sum: 1 }
          }
        },
        {
          $sort: {
            _id: 1
          }
        }
      ]);
    };

    const patient_over_time_p = getGroupData(Patient);
    const users_over_time = getGroupData(User);
    const hospital_over_time = getGroupData(Hospital);
    const doctors_over_time = getGroupData(Doctor);

    const getDateRange = (startDate, endDate) => {
      const dateRange = [];
      let counter = 0;
      while (moment(startDate).isBefore(moment(endDate))) {
        dateRange.push(startDate);
        startDate = moment(startDate)
          .add(1, "day")
          .toDate();
        counter += 1;
      }
      return dateRange;
    };

    let [
      patientsOverTime,
      userOverTime,
      hospitalOverTime,
      doctorsOverTime
    ] = await Promise.all([
      patient_over_time_p,
      users_over_time,
      hospital_over_time,
      doctors_over_time
    ]);

    const dateRange = getDateRange(startTime, endTime);

    const insights = dateRange.map(date => {
      const patient = patientsOverTime.find(
        x => x._id === moment(date).format("YYYY-MM-DD")
      );
      const user = userOverTime.find(
        x => x._id === moment(date).format("YYYY-MM-DD")
      );
      const hospital = hospitalOverTime.find(
        x => x._id === moment(date).format("YYYY-MM-DD")
      );
      const doctor = doctorsOverTime.find(
        x => x._id === moment(date).format("YYYY-MM-DD")
      );
      return {
        date,
        patientCount: (patient || {}).count,
        userCount: (user || {}).count,
        hospitalCount: (hospital || {}).count,
        doctorCount: (doctor || {}).count
      };
    });

    const userCount = userOverTime.reduce(
      (prev, curr) => ({
        count: prev.count + curr.count
      }),
      { count: 0 }
    );
    const hospitalCount = hospitalOverTime.reduce(
      (prev, curr) => ({
        count: prev.count + curr.count
      }),
      { count: 0 }
    );
    const doctorCount = doctorsOverTime.reduce(
      (prev, curr) => ({
        count: prev.count + curr.count
      }),
      { count: 0 }
    );

    patientsOverTime = patientsOverTime.map(
      element => ({
        date: element._id,
        patient: element.count
      }),
      { count: 0 }
    );

    res.json({
      success: true,
      data: {
        info: {
          user_count: userCount.count,
          hospital_count: hospitalCount.count,
          doctor_count: doctorCount.count
        },
        charts: {
          patientsOverTime,
          patientByGender: []
        },
        insights
      }
    });
  } catch (err) {
    handleError(err);
    res.status(401);
    res.json({
      success: false,
      error: err
    });
  }
};

module.exports = {
  getAnalytics
};
