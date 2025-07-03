import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API key not set.' }, { status: 500 });
  }

  const systemPrompt = `You are an AI assistant for the portfolio website of Henry Brown. Only answer questions about Henry Brown, his education, skills, experience, projects and related questions. Do not answer about questions not related to Henry Brown. asked anything unrelated, politely respond that you can only answer questions about Henry Brown.
          Here is Henry's resume
          
        HENRY BROWN
        4567 Main Street, Detroit, MI 48127 | (313) 555-0100 | henrybrown9408@gmail.com 

        Innovative, detail-oriented developer with strong expertise in software engineering, programming, and full-stack development. Adept at designing and implementing scalable solutions, collaborating effectively with cross-functional teams, and taking ownership of projects from conception to deployment. Committed to writing clean, efficient code and continuously improving technical skills to deliver high-quality software that drives business success.

        EXPERIENCE
        October 2020 – Present
        Senior Software Developer | Apple Inc.
        Working at Apple involves engaging in innovative product development, software engineering, and customer-centric design. Employees often work on cutting-edge technology such as iPhones, MacBooks, and software platforms like iOS and macOS. The environment emphasizes creativity, attention to detail, and delivering seamless user experiences. Collaboration and innovation are key, with opportunities to contribute to products used worldwide.

        June 2016 – December 2020
        Software Developer | Cisco Systems
        At Cisco, the focus is on networking hardware, telecommunications equipment, and cybersecurity solutions. Employees work on developing and supporting networking infrastructure that powers the internet and enterprise communications. The role often involves problem-solving, technical expertise, and project management to help organizations improve their network security, reliability, and performance.

        March 2014 – May 2016
        Junior Developer | NEC Corporation 
        Working at NEC involves contributing to information technology, network solutions, and electronic devices. Employees often participate in developing software for telecommunications, public safety systems, and smart city infrastructure. NEC emphasizes technological innovation for societal advancement, offering roles that focus on research, system integration, and deploying technology for public and private sector needs.

        EDUCATION
        April 2012
        Bachelor Degree in Computer Engineering | Greenwood University
        •	Developed a comprehensive understanding of Computer Engineering fundamentals.
        •	Enhanced critical thinking and problem-solving capabilities through rigorous coursework.
        •	Participated in various projects and extracurricular activities that enriched practical skills.

        January 2014
        Master’s Degree in Cloud Computing | Horizon Institute
        •	Specialized in Cloud Computing, building upon foundational knowledge.
        •	Conducted research and engaged in advanced coursework to deepen expertise.
        •	Successfully completed a thesis/project focused on Cloud Computing applications.

        SKILLS

        •	JavaScript
        •	React
        •	Angular	•	Next.JS
        •	CSS3/Tailwind CSS
        •	Azure Cloud

        `;

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
    temperature: 0.7,
    max_tokens: 400,
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.error?.message || 'OpenAI error' }, { status: 500 });
    }

    const data = await response.json();
    const aiMessage =
      data.choices?.[0]?.message?.content?.trim() || 'Sorry, I could not generate a response.';
    return NextResponse.json({ message: aiMessage });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to connect to OpenAI.' }, { status: 500 });
  }
}
