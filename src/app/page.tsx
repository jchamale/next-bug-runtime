import { redirect } from "next/navigation";

// export const runtime = "edge";

export default async function Home() {
  async function sayHello(formData: FormData) {
    "use server";
    redirect(`/hello?name=${formData.get("name")}`);
  }

  return (
    <form action={sayHello}>
      <input type="text" name="name" />
      <button type="submit">Say hello</button>
    </form>
  );
}
