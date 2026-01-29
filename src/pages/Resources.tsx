import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, FileText, Calendar, Download, Bell, Clock } from "lucide-react";

const blogPosts = [
  { title: "5 Documents Every Family Should Have Ready", category: "Preparedness", time: "5 min read" },
  { title: "How to Have 'The Talk' with Your Family", category: "Family", time: "7 min read" },
  { title: "Creating an Emergency Contact Plan", category: "Emergency Prep", time: "6 min read" },
  { title: "Understanding Your Rights: A Family Guide", category: "Resources", time: "8 min read" },
  { title: "Organizing Documents for Peace of Mind", category: "Organization", time: "4 min read" },
  { title: "The Complete Family Document Checklist", category: "Guides", time: "10 min read" },
];

const courses = [
  { title: "Family Preparedness Basics", lessons: 8, duration: "45 min", level: "Beginner" },
  { title: "Having Family Conversations", lessons: 5, duration: "30 min", level: "Beginner" },
  { title: "Advanced Emergency Planning", lessons: 12, duration: "1.5 hrs", level: "Advanced" },
];

const Resources = () => {
  return (
    <Layout>
      <PageHero 
        title="Resources"
        subtitle="Learn everything you need to know about protecting your family"
        animation="gradient-shift"
      />

      <SectionWrapper background="default" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="Articles" title="Latest from the Blog" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.title} className="group rounded-[20px] bg-card border border-border overflow-hidden hover:shadow-elevated transition-all duration-200">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.time}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Coming Soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide">
          <SectionHeader badge="Learn" title="Mini-Courses" description="Free educational content to help you protect your family" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="rounded-[20px] bg-card border border-border p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{course.lessons} lessons • {course.duration}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full font-medium">{course.level}</span>
                  <Button size="sm" variant="outline" className="gap-1 rounded-lg"><Bell className="h-3 w-3" />Notify Me</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" animation="diagonal-lines">
        <div className="container-wide">
          <SectionHeader badge="Tools" title="Free Downloads" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Family Document Checklist", "Document Organizer Template", "Emergency Contact Sheet"].map((item) => (
              <div key={item} className="flex items-center gap-4 p-5 rounded-[20px] bg-card border border-border">
                <FileText className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1"><h3 className="font-medium text-foreground">{item}</h3><p className="text-xs text-muted-foreground">PDF Download</p></div>
                <Button size="sm" variant="ghost" className="rounded-lg"><Download className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="gradient-sweep">
        <div className="container-wide">
          <SectionHeader badge="Events" title="Upcoming Webinars" />
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {["Getting Started with Family Preparedness", "Ask the Experts: Q&A Session", "Advanced Protection Strategies"].map((title, i) => (
              <div key={title} className="flex items-center gap-4 p-5 rounded-[20px] bg-card border border-border">
                <Calendar className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1"><h3 className="font-medium text-foreground">{title}</h3><p className="text-xs text-muted-foreground">Coming Q{i + 1} 2026</p></div>
                <Button size="sm" variant="outline" className="rounded-lg">Register</Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Resources;