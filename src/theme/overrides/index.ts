import { merge } from "lodash";

import Alert from "./Alert";
import Button from "./Button";

export default function ComponentsOverrides() {
  return merge(Button(), Alert());
}
