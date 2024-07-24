"use client";
import { AddBook } from "@/actions/action";
import { Button } from "./button";
import { useRef } from "react";

export default function Add() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <form
        className="space-y-4"
        ref={formRef}
        action={async (e) =>
          await AddBook(e).then(() => formRef.current?.reset())
        }
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="text"
              name="title"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <div className="mt-1">
            <input
              className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="text"
              name="author"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Published
          </label>
          <div className="mt-1">
            <input
              className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="number"
              name="published"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            ISBN
          </label>
          <div className="mt-1">
            <input
              className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="string"
              name="isbn"
            />
          </div>
        </div>
        <div>
          <Button />
        </div>
      </form>
    </div>
  );
}
