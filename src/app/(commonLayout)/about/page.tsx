//if you want to make the page dynamic and not cached at all
export const dynamic = 'force-dynamic';

export default async function AboutPage() {

await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error ("Failed to load data")
    
  return (
    <div>
        <h1> This is About page</h1>
    </div>
  );
}
