import CourseSection from "@/screens/course/section";
import type { Metadata } from "next";

export default function IndexPage() {
  return <CourseSection />
}

export const metadata: Metadata = {
  title: "Course Section",
};
