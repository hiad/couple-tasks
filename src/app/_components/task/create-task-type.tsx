"use client";

import { useState } from "react";

import { api } from "@/trpc/react";

export function CreateType() {
  const [type, setType] = useState("");

  const utils = api.useUtils();

  const createType = api.type.createType.useMutation({
    onSuccess: async () => {
      setType("");
      await utils.type.getAllTypes.invalidate();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createType.mutate({
          type,
        });
      }}
      className="flex flex-row gap-2"
    >
      <input
        type="text"
        placeholder="Create your type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createType.isLoading}
      >
        {createType.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
