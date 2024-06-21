import React from "react";
import { notFound } from "next/navigation";

import Container from "@/components/common/Container"
import Title from "@/components/common/Title";
import Subtitle from "@/components/common/Subtitle";
import Module from "@/components/courses/Module";
import { courses, CourseURLMapper } from "@/config/courses"
import HotCourses from "@/components/landing/HotCourses";

type Params = {
    params: {
        courseName: string
    }
}
export default function CourseSpecificPage({ params }: Params) {
    const { courseName } = params;

    if (!(courseName in CourseURLMapper)) {
        notFound();
    }

    const courseDetails = {
        title: CourseURLMapper[courseName],
        description: courses["Introduction to Programming"].description,
        creator: courses["Introduction to Programming"].creator,
        creatorProfileUrl: courses["Introduction to Programming"].creatorProfileUrl,
        courseUrl: courses["Introduction to Programming"].courseUrl,
        likes: courses["Introduction to Programming"].likes,
    }

    return (
        <Container className="flex items-start justify-center gap-4 max-w-8xl">
            <Container className="col-span-2">
                <Module courseDetails={courseDetails} />
            </Container>
        </Container>
    );
}