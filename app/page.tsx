// English landing page for Greek Ships XYZ.
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en");

const Page = () => <HomePage locale="en" />;

export default Page;
