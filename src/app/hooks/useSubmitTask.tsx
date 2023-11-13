import { type TaskModel } from "@/models/models";
import { api } from "@/trpc/react";

const useSubmitTask = () => {
  const utils = api.useUtils();
  const createTask = api.task.createTask.useMutation({
    onSuccess: async () => {
      await utils.task.getAllTasks.invalidate();
    },
  });

  const onSubmit = (values: TaskModel) => {
    console.log(values.types);
    const types = values?.types?.map(({ value }) => Number(value)) ?? [];
    createTask.mutate({
      task: values.task,
      types: types,
      check: false,
    });
  };

  return {
    isLoading: createTask.isLoading,
    onSubmit,
  };
};

export default useSubmitTask;
