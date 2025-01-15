import Head from "next/head";

export default function Maintenance() {
  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://hocinehamama.vercel.app/";
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Maintenance | Hocine Dev</title>
        <meta
          name="description"
          content="This site is currently under maintenance. You will be redirected shortly."
        />
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100 text-center text-gray-800">
        <div>
          <h1 className="text-4xl font-bold mb-4">We'll be back soon!</h1>
          <p className="text-lg mb-6">
            Our website is currently undergoing maintenance. You will be
            redirected to our portfolio page in a few moments.
          </p>
          <p className="text-sm text-gray-600">
            If you are not redirected, please{" "}
            <a
              href="https://hocinehamama.vercel.app/"
              className="text-blue-500 underline"
            >
              click here
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
