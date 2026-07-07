import { NextRequest, NextResponse } from "next/server"
import { getSupabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string
    const resume = formData.get("resume") as File | null

    const supabase = getSupabase()

    let resumeUrl: string | null = null

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer())
      const fileName = `${Date.now()}-${resume.name}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, buffer, {
          contentType: resume.type,
          upsert: false,
        })

      if (uploadError) {
        console.error("Upload error:", uploadError)
      } else {
        const { data: urlData } = supabase.storage.from("resumes").getPublicUrl(fileName)
        resumeUrl = urlData?.publicUrl || null
      }
    }

    const { error } = await supabase.from("applications").insert([
      {
        name,
        email,
        phone,
        position,
        experience,
        message: message || null,
        resume_url: resumeUrl,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save application" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Apply API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
