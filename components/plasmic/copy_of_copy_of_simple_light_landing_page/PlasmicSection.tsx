// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j4cXxWNaY4H61DNMUdHEeq
// Component: 7xKegq4mPEUI7
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_copy_of_simple_light_landing_page.module.css"; // plasmic-import: j4cXxWNaY4H61DNMUdHEeq/projectcss
import * as sty from "./PlasmicSection.module.css"; // plasmic-import: 7xKegq4mPEUI7/css

export type PlasmicSection__VariantMembers = {};

export type PlasmicSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicSection__VariantsArgs;
export const PlasmicSection__VariantProps = new Array<VariantPropType>();

export type PlasmicSection__ArgsType = {
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSection__ArgsType;
export const PlasmicSection__ArgProps = new Array<ArgPropType>(
  "subtitle",
  "title"
);

export type PlasmicSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSectionProps {
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

function PlasmicSection__RenderFunc(props: {
  variants: PlasmicSection__VariantsArgs;
  args: PlasmicSection__ArgsType;
  overrides: PlasmicSection__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={"Trusted by over 20,000 companies all over the world"}
        value={args.title}
        className={classNames(sty.slotTitle)}
      />
      <p.PlasmicSlot
        defaultContents={
          "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
        }
        value={args.subtitle}
        className={classNames(sty.slotSubtitle)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSection__VariantsArgs;
  args?: PlasmicSection__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSection__ArgProps,
      internalVariantPropNames: PlasmicSection__VariantProps
    });

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
