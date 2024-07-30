import { DiscoverTermForm } from "@components/org.discover-term-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-[480px] min-w-[400px]">
        <DiscoverTermForm />
      </div>
    </main>
  );
}
