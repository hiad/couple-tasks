"use client";

import ReactSelect from "react-select";
import { api } from "@/trpc/react";
import { Controller, useForm } from "react-hook-form";
import { type TaskModel } from "@/models/models";
import useSubmitTask from "@/app/hooks/useSubmitTask";

export function CreateTask() {
  const { control, register, handleSubmit } = useForm<TaskModel>();
  const { isLoading, onSubmit } = useSubmitTask();
  const { data } = api.type.getAllTypes.useQuery();
  const userTypes = data?.map(({ id, type }) => ({
    label: type,
    value: id.toString(),
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Create your task"
        className="px-4 py-2 text-black"
        {...register("task")}
      />

      <Controller
        name="types"
        control={control}
        render={({ field }) => (
          <ReactSelect isMulti {...field} options={userTypes ?? []} />
        )}
      />
      <button
        type="submit"
        className="bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
