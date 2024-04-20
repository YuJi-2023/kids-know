import { Icon } from "react-bootstrap-icons";

export default interface Feature {
  id: number;
  icon: Icon;
  text: string;
  description?: string;
}