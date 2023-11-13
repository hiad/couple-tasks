import Header from "./_components/header/header";
import { CreateTask } from "./_components/task/create-task";
import { CreateType } from "./_components/task/create-task-type";
import GridTask from "./_components/tasks/GridTask";

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-8">
        <div>
          <CreateType />
          <CreateTask />
        </div>
        <div>
          <GridTask />
        </div>
      </main>
    </>
  );
}
