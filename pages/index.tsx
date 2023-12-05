import { useFormatter } from "next-intl";
import Link from "next/link";

export default function Page() {
  const format = useFormatter();

  return (
    <div>
      <p>Currency: {format.number(123456789, "currency")}</p>
      <ul>
        <li>
          <Link href="/pdf">PDF</Link>
        </li>
        <li>
          <Link href="/template">Template</Link>
        </li>
      </ul>
    </div>
  );
}
