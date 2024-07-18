import CourseLesson from "@/screens/course/lesson";
import type { Metadata } from "next";

export default function IndexPage() {
  return <CourseLesson />
}

export const metadata: Metadata = {
  title: "Course Lesson",
};
