import { withLayout } from "layouts";
import Layout from "./layout";
import { AuthServices } from "Services";

export default AuthServices.isAuthenticated() ? withLayout(Layout) : Layout;
