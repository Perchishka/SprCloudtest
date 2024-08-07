export type Entity = "users";

export type Method = "get" | "post" | "put" | "patch" | "delete";

export type Resource = User;

export type User = {
  name: string;
  job: string;
};

export type WithResposeFields<T> = {
  id: number;
  updatedAt?: string;
  createdAt?: string;
} & T;
