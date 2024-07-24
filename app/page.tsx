import Add from "@/components/addbookform";
import { DeleteButton } from "@/components/button";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
  const books = await prisma.book.findMany();
  return (
    <>
      <Add />
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Published
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ISBN
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {book.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {book.author}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {book.published}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {book.isbn}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <DeleteButton id={book.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
