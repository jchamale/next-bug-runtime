export default async function Page({
  searchParams: { name },
}: {
  searchParams: {
    name: string;
  };
}) {
  return <h1>Hello {name}!</h1>;
}
