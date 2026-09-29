import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_resume(output_path):
    margin = 26
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=margin,
        leftMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )

    styles = getSampleStyleSheet()
    
    # Custom color palette
    primary_color = colors.HexColor("#0891b2") # Cyan 600
    dark_text = colors.HexColor("#0f172a") # Slate 900
    gray_text = colors.HexColor("#475569") # Slate 600
    accent_bar = colors.HexColor("#06b6d4") # Cyan 500
    light_cyan = colors.HexColor("#ecfeff") # Cyan 50
    border_cyan = colors.HexColor("#0891b2") # Cyan 600
    divider_gray = colors.HexColor("#cbd5e1") # Slate 300
    
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=23,
        textColor=dark_text,
        alignment=0,
        spaceAfter=1
    )
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=primary_color,
        spaceAfter=2
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.5,
        textColor=gray_text,
        spaceAfter=3
    )
    
    section_head_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=12,
        textColor=primary_color,
        spaceBefore=4,
        spaceAfter=2
    )
    
    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.6,
        leading=11,
        textColor=dark_text
    )
    
    subtext_style = ParagraphStyle(
        'SubText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8,
        leading=10,
        textColor=gray_text
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.5,
        textColor=dark_text,
        spaceAfter=2
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.2,
        textColor=dark_text,
        leftIndent=8,
        spaceAfter=1
    )
    
    spotlight_style = ParagraphStyle(
        'Spotlight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.8,
        textColor=dark_text
    )

    story = []

    # 1. Header
    story.append(Paragraph("KUBENDIRAN M", name_style))
    story.append(Paragraph(
        "Computer Science (AI) Undergraduate | ServiceNow Certified (CAD &amp; CSA) | Software Developer",
        title_style
    ))
    contact_info = (
        "Chennai, India &bull; Phone: +91-9344715210 &bull; Email: kuben3456@gmail.com &bull; "
        "LinkedIn: linkedin.com/in/m-kubendiran-2546702b5 &bull; GitHub: github.com/Kube030106"
    )
    story.append(Paragraph(contact_info, contact_style))
    story.append(HRFlowable(width="100%", thickness=1.2, color=accent_bar, spaceBefore=1, spaceAfter=3))

    # 2. Featured ServiceNow Credentials Callout Box
    usable_width = letter[0] - 2 * margin
    box_content = Paragraph(
        "<b><font color='#0891b2'>FEATURED INDUSTRY CREDENTIALS &mdash; SERVICENOW CERTIFIED:</font></b><br/>"
        "&bull; <b>ServiceNow Certified Application Developer (CAD)</b> &ndash; Scoped Applications, Client/Server Scripting, Flow Designer, REST Integrations.<br/>"
        "&bull; <b>ServiceNow Certified System Administrator (CSA)</b> &ndash; Platform Configuration, User/Role Governance, Service Catalog, CMDB, Workflows.",
        spotlight_style
    )
    box_table = Table([[box_content]], colWidths=[usable_width])
    box_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), light_cyan),
        ('BOX', (0,0), (-1,-1), 1, border_cyan),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(box_table)
    story.append(Spacer(1, 1.5))

    # 3. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_head_style))
    summary_text = (
        "Motivated Computer Science (AI) undergraduate and ServiceNow Certified Developer &amp; Administrator (CAD, CSA) "
        "with strong expertise in enterprise platform development, full-stack web applications, and computer vision systems. "
        "Demonstrated success in architecting biometric facial recognition pipelines, natural language query translation engines, "
        "and automated enterprise workflows. Seeking high-impact software engineering or ServiceNow development roles."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.4, color=divider_gray, spaceBefore=1.5, spaceAfter=2))

    # 4. Technical Skills
    story.append(Paragraph("TECHNICAL &amp; CORE SKILLS", section_head_style))
    skills_data = [
        [Paragraph("<b>ServiceNow Platform:</b>", bullet_style), Paragraph("<b>ServiceNow CAD &amp; CSA Certified</b>, Scoped Applications, Flow Designer, Business Rules, Client Scripts, Script Includes, UI Policies &amp; Actions, Service Catalog, CMDB, REST APIs", body_style)],
        [Paragraph("<b>Programming Languages:</b>", bullet_style), Paragraph("Python, Java, C, SQL, JavaScript (Modern ES6+)", body_style)],
        [Paragraph("<b>Web &amp; Frameworks:</b>", bullet_style), Paragraph("ReactJS, Flask, REST APIs, HTML5, CSS3, Tailwind CSS", body_style)],
        [Paragraph("<b>Databases &amp; Cloud:</b>", bullet_style), Paragraph("PostgreSQL, Supabase, Relational Modeling, ACID Transactions, Indexing", body_style)],
        [Paragraph("<b>AI &amp; Libraries:</b>", bullet_style), Paragraph("OpenCV, DeepFace (ArcFace), Scikit-learn, Pandas, NumPy, Computer Vision", body_style)],
        [Paragraph("<b>Developer Tools:</b>", bullet_style), Paragraph("Git, GitHub, VS Code, Postman, Linux, Arduino IDE", body_style)]
    ]
    skills_table = Table(skills_data, colWidths=[1.45 * inch, usable_width - 1.45 * inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.8),
        ('TOPPADDING', (0,0), (-1,-1), 0.8),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(HRFlowable(width="100%", thickness=0.4, color=divider_gray, spaceBefore=1.5, spaceAfter=2))

    # 5. Experience
    story.append(Paragraph("EXPERIENCE", section_head_style))
    story.append(Paragraph("<b>Software Developer Intern</b> &mdash; Rudhra Info Solutions, Chennai | <i>1 Month (Full-Stack &amp; Python)</i>", item_title_style))
    story.append(Paragraph("&bull; Developed responsive front-end user interfaces using HTML5, CSS3, and JavaScript, ensuring seamless cross-browser compatibility.", bullet_style))
    story.append(Paragraph("&bull; Integrated Python backend logic and executed rigorous debugging to resolve UI/UX and functional defects.", bullet_style))
    story.append(Paragraph("&bull; Maintained disciplined version control workflows using Git and GitHub for feature branch staging and peer code reviews.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.4, color=divider_gray, spaceBefore=1.5, spaceAfter=2))

    # 6. Projects
    story.append(Paragraph("KEY PROJECTS", section_head_style))
    projs = [
        ("<b>DataTalk &ndash; Natural Language Text-to-SQL &amp; Dynamic Visualization</b> | <i>ReactJS, Plotly, Supabase, Python</i>",
         "&bull; Engineered natural language translation engine converting plain English queries to executable PostgreSQL with real-time Plotly charts."),
        ("<b>Student Identification System using ArcFace</b> | <i>Python, OpenCV, DeepFace (ArcFace), Flask</i>",
         "&bull; Developed biometric facial identification platform with ArcFace angular margin loss, achieving 99.4% accuracy and sub-50ms latency."),
        ("<b>Real-Time Face Recognition Web System</b> | <i>Python, OpenCV, Flask</i>",
         "&bull; Designed multi-threaded video surveillance dashboard with automated face registration, feature extraction, and real-time logging."),
        ("<b>Startup Unicorn Prediction System</b> | <i>Python, Scikit-learn, Pandas, NumPy</i>",
         "&bull; Trained machine learning classifier predicting unicorn valuation trajectory from venture funding rounds and market dynamics (0.94 ROC-AUC)."),
        ("<b>Weather Sync &ndash; IoT Environmental Monitoring System</b> | <i>Arduino, C++, DHT22 Sensors</i>",
         "&bull; Fabricated embedded hardware station recording real-time temperature/humidity with automated LED alert triggers and serial telemetry.")
    ]
    for p_title, p_bullet in projs:
        story.append(Paragraph(p_title, item_title_style))
        story.append(Paragraph(p_bullet, bullet_style))
        story.append(Spacer(1, 0.8))
    story.append(HRFlowable(width="100%", thickness=0.4, color=divider_gray, spaceBefore=1.5, spaceAfter=2))

    # 7. Certifications
    story.append(Paragraph("CERTIFICATIONS &amp; ACCREDITATIONS", section_head_style))
    story.append(Paragraph("&bull; <b>ServiceNow Certified Application Developer (CAD)</b> &ndash; Scoped app development, scripting, Flow Designer, REST APIs.", bullet_style))
    story.append(Paragraph("&bull; <b>ServiceNow Certified System Administrator (CSA)</b> &ndash; Platform administration, user/role management, service catalog, CMDB.", bullet_style))
    story.append(Paragraph("&bull; <b>NPTEL:</b> Database Management Systems (DBMS) &ndash; Relational modeling, normalization, indexing, and SQL optimization.", bullet_style))
    story.append(Paragraph("&bull; <b>HCL (GUVI):</b> Modern JavaScript Programming &ndash; ES6+, asynchronous architecture, DOM manipulation, and REST APIs.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.4, color=divider_gray, spaceBefore=1.5, spaceAfter=2))

    # 8. Education
    story.append(Paragraph("EDUCATION", section_head_style))
    story.append(Paragraph("<b>B.E. Computer Science &amp; Engineering (Artificial Intelligence)</b> &mdash; Sathyabama Institute of Science &amp; Technology, Chennai", item_title_style))
    story.append(Paragraph("<i>2023 &ndash; 2027 (Expected)</i> | <b>CGPA: 8.6 / 10.0</b> | Coursework: DSA, OOP, Machine Learning, Computer Vision, DBMS, OS, Networks", subtext_style))
    story.append(Paragraph("<b>Higher Secondary Certificate (12th):</b> Aditya Vidyashram (2023) &ndash; <b>73%</b> | <b>Secondary (10th):</b> Aditya Vidyashram (2021) &ndash; <b>86%</b>", subtext_style))

    doc.build(story)
    print(f"Successfully generated resume at {output_path}")

if __name__ == '__main__':
    out_dir = os.path.join(os.getcwd(), 'public')
    os.makedirs(out_dir, exist_ok=True)
    create_resume(os.path.join(out_dir, 'resume.pdf'))
