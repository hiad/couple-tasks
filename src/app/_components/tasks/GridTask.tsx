"use client";

import { api } from "@/trpc/react";
import { Check } from "react-feather";

function GridTask() {
  const { data } = api.task.getAllTasks.useQuery();
  return (
    <div className="flex flex-col">
      <div className="w-ful flex flex-row justify-center border-2 p-4">
        <p className="flex-1">{<Check />}</p>
        <p className="flex-1">Task</p>
        <p className="flex-1">Types</p>
      </div>
      {data?.map(({ task, check, types }) => (
        <div
          className="flex w-full flex-row border-2 p-4"
          key={crypto.randomUUID()}
        >
          <input
            className="flex-1"
            type="checkbox"
            name="check"
            checked={check}
          />
          <p className="flex-1 font-bold">{task}</p>
          <ul className=" flex-1">
            {types?.map(({ type }) => (
              <li key={crypto.randomUUID()}>{type}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GridTask;
