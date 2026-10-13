import HomePage from "@/components/home-page";

export default function Page() {
  return (
    <>
      <link rel="preload" href="/hero-cutout.webp" as="image" fetchPriority="high" />
      <HomePage />
    </>
  );
}
