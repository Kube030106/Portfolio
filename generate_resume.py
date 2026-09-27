import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.5 * inch,
        leftMargin=0.5 * inch,
        topMargin=0.4 * inch,
        bottomMargin=0.4 * inch
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    primary_color = colors.HexColor("#0891b2") # Cyan 600
    dark_text = colors.HexColor("#0f172a") # Slate 900
    gray_text = colors.HexColor("#475569") # Slate 600
    accent_bar = colors.HexColor("#06b6d4")
    
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=dark_text,
        alignment=0,
        spaceAfter=2
    )
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=primary_color,
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=gray_text,
        spaceAfter=8
    )
    
    section_head_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=3
    )
    
    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=dark_text
    )
    
    subtext_style = ParagraphStyle(
        'SubText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=gray_text
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=dark_text,
        spaceAfter=4
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12,
        textColor=dark_text,
        leftIndent=12,
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("KUBENDIRAN M", name_style))
    story.append(Paragraph("Computer Science (AI) Undergraduate | Aspiring Software Developer & AI Engineer", title_style))
    contact_info = (
        "Chennai, India &bull; Phone: +91-9344715210 &bull; Email: kuben3456@gmail.com<br/>"
        "LinkedIn: linkedin.com/in/m-kubendiran-2546702b5 &bull; GitHub: github.com/Kube030106"
    )
    story.append(Paragraph(contact_info, contact_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=accent_bar, spaceBefore=2, spaceAfter=8))

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_head_style))
    summary_text = (
        "Motivated Computer Science (Artificial Intelligence) undergraduate with a strong foundation in full-stack web development, "
        "computer vision, and machine learning. Demonstrated success in architecting interactive AI applications, real-time facial "
        "recognition systems, and IoT sensor solutions. Seeking an entry-level Software Developer or AI Engineering role to create "
        "impactful, high-performance technology products."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=4, spaceAfter=6))

    # Education
    story.append(Paragraph("EDUCATION", section_head_style))
    story.append(Paragraph("<b>B.E. Computer Science & Engineering (Artificial Intelligence)</b>", item_title_style))
    story.append(Paragraph("Sathyabama Institute of Science & Technology, Chennai | <i>2023 &ndash; 2027 (Expected)</i> | <b>CGPA: 8.6 / 10.0</b>", subtext_style))
    story.append(Paragraph("&bull; Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning, Computer Vision, Database Management Systems, Operating Systems, Computer Networks.", bullet_style))
    story.append(Spacer(1, 3))
    
    story.append(Paragraph("<b>Higher Secondary Certificate (12th Grade)</b>", item_title_style))
    story.append(Paragraph("Aditya Vidyashram | <i>2023</i> | <b>Score: 73%</b>", subtext_style))
    story.append(Spacer(1, 3))
    
    story.append(Paragraph("<b>Secondary School Certificate (10th Grade)</b>", item_title_style))
    story.append(Paragraph("Aditya Vidyashram | <i>2021</i> | <b>Score: 86%</b>", subtext_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=4, spaceAfter=6))

    # Technical Skills
    story.append(Paragraph("TECHNICAL & CORE SKILLS", section_head_style))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", bullet_style), Paragraph("Python, Java, C, SQL", body_style)],
        [Paragraph("<b>Web & Frontend:</b>", bullet_style), Paragraph("ReactJS, REST APIs", body_style)],
        [Paragraph("<b>Databases & Cloud:</b>", bullet_style), Paragraph("PostgreSQL, Supabase", body_style)],
        [Paragraph("<b>Libraries & Frameworks:</b>", bullet_style), Paragraph("OpenCV, Computer Vision", body_style)],
        [Paragraph("<b>Tools & Systems:</b>", bullet_style), Paragraph("Git, GitHub, VS Code, Arduino IDE", body_style)],
        [Paragraph("<b>Core Concepts:</b>", bullet_style), Paragraph("Data Structures & Algorithms, OOP, OS, Computer Networks, ML, Computer Vision, IoT", body_style)],
        [Paragraph("<b>Soft Skills:</b>", bullet_style), Paragraph("Problem Solving, Communication, Leadership, Time Management, Agile Collaboration", body_style)],
        [Paragraph("<b>Languages Known:</b>", bullet_style), Paragraph("English (Professional), Tamil (Native), Telugu (Conversational Speaking)", body_style)]
    ]
    t = Table(skills_data, colWidths=[1.8 * inch, 5.7 * inch])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=4, spaceAfter=6))

    # Experience
    story.append(Paragraph("EXPERIENCE", section_head_style))
    story.append(Paragraph("<b>Software Developer Intern</b> &mdash; Rudhra Info Solutions, Chennai", item_title_style))
    story.append(Paragraph("<i>Duration: 1 Month | Full-Stack & Python Web Development</i>", subtext_style))
    story.append(Paragraph("&bull; Developed responsive front-end user interfaces using HTML5, CSS3, and JavaScript, ensuring seamless cross-browser compatibility.", bullet_style))
    story.append(Paragraph("&bull; Integrated Python-backed business logic and executed rigorous debugging to resolve UI/UX and functional bugs.", bullet_style))
    story.append(Paragraph("&bull; Maintained disciplined version control workflows utilizing Git and GitHub for feature branch staging and peer code reviews.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=4, spaceAfter=6))

    # Projects
    story.append(Paragraph("KEY PROJECTS", section_head_style))
    
    # Project 1
    story.append(Paragraph("<b>DataTalk &ndash; Natural Language Text-to-SQL & Dynamic Visualization</b> | <i>ReactJS, Plotly, Supabase, Tailwind CSS</i>", item_title_style))
    story.append(Paragraph("&bull; Built an intuitive interface translating plain-English business queries into executable PostgreSQL commands.", bullet_style))
    story.append(Paragraph("&bull; Engineered automated dynamic data visualizer rendering real-time Plotly charts and exportable analytical summaries.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2
    story.append(Paragraph("<b>Student Identification System using ArcFace</b> | <i>Python, OpenCV, DeepFace (ArcFace), Flask</i>", item_title_style))
    story.append(Paragraph("&bull; Developed high-precision facial recognition pipeline using additive angular margin loss (ArcFace) for biometric student ID.", bullet_style))
    story.append(Paragraph("&bull; Achieved rapid sub-second verification latency and resilient matching across varying lighting angles and poses.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3
    story.append(Paragraph("<b>Real-Time Face Recognition Web System</b> | <i>Python, OpenCV, Flask</i>", item_title_style))
    story.append(Paragraph("&bull; Designed multi-threaded real-time video surveillance dashboard with automated face registration, feature extraction, and logging.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 4
    story.append(Paragraph("<b>Startup Unicorn Prediction System</b> | <i>Python, Pandas, NumPy, Scikit-learn</i>", item_title_style))
    story.append(Paragraph("&bull; Trained supervised machine learning classifier evaluating venture funding rounds, market size, and momentum indicators.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 5
    story.append(Paragraph("<b>Weather Sync &ndash; IoT Environmental Monitoring System</b> | <i>Arduino, C++, DHT22, Sensors</i>", item_title_style))
    story.append(Paragraph("&bull; Fabricated embedded hardware station recording real-time ambient temperature and humidity with automated LED alert triggers.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=4, spaceAfter=6))

    # Certifications
    story.append(Paragraph("CERTIFICATIONS", section_head_style))
    story.append(Paragraph("&bull; <b>NPTEL:</b> Database Management Systems (DBMS) &ndash; Relational modeling, normalization, indexing, and SQL optimization.", bullet_style))
    story.append(Paragraph("&bull; <b>HCL (GUVI):</b> JavaScript Programming &ndash; Modern ES6+, DOM manipulation, asynchronous architecture, and REST API integration.", bullet_style))

    doc.build(story)
    print(f"Successfully generated resume at {output_path}")

if __name__ == '__main__':
    out_dir = os.path.join(os.getcwd(), 'public')
    os.makedirs(out_dir, exist_ok=True)
    create_resume(os.path.join(out_dir, 'resume.pdf'))
