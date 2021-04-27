// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 56"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.278 25.654h-2.253c-2.89 0-5.258-.895-7.107-2.658C.982 20.974 0 18.49 0 15.601V3.293c0-.895.318-1.675.982-2.31C1.647.317 2.398 0 3.293 0c.954 0 1.734.318 2.37.982.664.636 1.01 1.416 1.01 2.311v12.308c0 .635.116 1.329.376 2.05.55.867 1.445 1.33 2.774 1.33h22.361c2.917 0 5.286.895 7.106 2.658 1.936 2.022 2.918 4.506 2.918 7.395V52.58c0 .895-.317 1.647-.982 2.311-.636.636-1.416.982-2.282.982-.954 0-1.763-.346-2.398-.982-.665-.664-.982-1.416-.982-2.311V29.034c0-.635-.145-1.328-.376-2.022-.549-.895-1.473-1.358-2.773-1.358H12.278z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
