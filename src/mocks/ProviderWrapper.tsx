import { Provider } from "react-redux";
import { store } from "../redux/store";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
