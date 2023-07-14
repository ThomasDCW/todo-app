import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UUID } from "crypto";

export type TodoState = {
  id: UUID;
  title: number;
};
