import { ProjectsData } from "@/projectsData/Data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        // const filteredProjects = ProjectsData.filter((project) =>
        //     project.techStack.includes(query)
        // );
        const filteredProjects = ProjectsData.filter((project) =>
            project.techStack.some((tech) => tech.toLowerCase().includes(query.toLowerCase()))
        );
        return NextResponse.json(filteredProjects);

    } catch (error) {
        return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
    }
}
