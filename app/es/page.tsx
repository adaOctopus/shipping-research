// Spanish landing page: same research site, equivalent copy in proper Spanish.
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es");

const SpanishPage = () => <HomePage locale="es" />;

export default SpanishPage;
