// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j4cXxWNaY4H61DNMUdHEeq
// Component: LCodS0O3kgLbC
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: Mvx9lg2SpecgR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_copy_of_simple_light_landing_page.module.css"; // plasmic-import: j4cXxWNaY4H61DNMUdHEeq/projectcss
import * as sty from "./PlasmicTopSection.module.css"; // plasmic-import: LCodS0O3kgLbC/css

export type PlasmicTopSection__VariantMembers = {};

export type PlasmicTopSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection__VariantsArgs;
export const PlasmicTopSection__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection__ArgsType = {};
type ArgPropType = keyof PlasmicTopSection__ArgsType;
export const PlasmicTopSection__ArgProps = new Array<ArgPropType>();

export type PlasmicTopSection__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultTopSectionProps {
  className?: string;
}

function PlasmicTopSection__RenderFunc(props: {
  variants: PlasmicTopSection__VariantsArgs;
  args: PlasmicTopSection__ArgsType;
  overrides: PlasmicTopSection__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___5QJ0Z)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__w5BTx)}
        >
          <div className={classNames(defaultcss.all, sty.box__v5Xv)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__mbnss
              )}
            >
              {"Make your website"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__eBDir
              )}
            >
              {"duyvu"}
            </div>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__n7G27
            )}
          >
            {
              "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
            }
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___0Z7ZI)}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__xbNl)}
            text={"Start free trial"}
            type={"solidBlue" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__ru4Ix)}
            text={"Learn more"}
            type={"solidBlack" as const}
          />
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.box__qyJ2T)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={
              "/plasmic/copy_of_copy_of_simple_light_landing_page/images/heroImage.png"
            }
          />
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTopSection__VariantsArgs;
  args?: PlasmicTopSection__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTopSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTopSection__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTopSection__ArgProps,
      internalVariantPropNames: PlasmicTopSection__VariantProps
    });

    return PlasmicTopSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection";
  } else {
    func.displayName = `PlasmicTopSection.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection = Object.assign(
  // Top-level PlasmicTopSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicTopSection
    internalVariantProps: PlasmicTopSection__VariantProps,
    internalArgProps: PlasmicTopSection__ArgProps
  }
);

export default PlasmicTopSection;
/* prettier-ignore-end */
