import { revalidateTag } from "next/cache";

export default function GET() {
  revalidateTag("cms");
}
