"use client";
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

const RootFile = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default RootFile;
