import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, FileText, Calendar, Download, Bell, Clock } from "lucide-react";

const blogPosts = [
  { title: "5 Estate Planning Mistakes to Avoid", category: "Estate Planning", time: "5 min read" },
  { title: "How to Have 'The Talk' with Your Family", category: "Family", time: "7 min read" },
  { title: "Digital Assets: What Happens After You're Gone?", category: "Digital Legacy", time: "6 min read" },
  { title: "Understanding Wills vs. Trusts", category: "Legal", time: "8 min read" },
  { title: "Organizing Documents for Peace of Mind", category: "Organization", time: "4 min read" },
  { title: "The Complete Insurance Checklist", category: "Insurance", time: "10 min read" },
];

const courses = [
  { title: "Estate Planning Basics", lessons: 8, duration: "45 min", level: "Beginner" },
  { title: "Having Family Conversations", lessons: 5, duration: "30 min", level: "Beginner" },
  { title: "Advanced Legacy Planning", lessons: 12, duration: "1.5 hrs", level: "Advanced" },
];

const Resources = () => {
  return (
    <Layout>
      <PageHero 
        title="Resources"
        subtitle="Learn everything you need to know about protecting your digital legacy"
        animation="gradient-shift"
      />

      <SectionWrapper background="default" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="Articles" title="Latest from the Blog" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.title} className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-elevated transition-all">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.time}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">Coming Soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide">
          <SectionHeader badge="Learn" title="Mini-Courses" description="Free educational content to help you plan your legacy" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="rounded-xl bg-card border border-border p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{course.lessons} lessons • {course.duration}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-muted px-2 py-1 rounded">{course.level}</span>
                  <Button size="sm" variant="outline" className="gap-1"><Bell className="h-3 w-3" />Notify Me</Button>
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
            {["Estate Planning Checklist", "Document Organizer Template", "Family Emergency Contact Sheet"].map((item) => (
              <div key={item} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
                <FileText className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1"><h3 className="font-medium text-foreground">{item}</h3><p className="text-xs text-muted-foreground">PDF Download</p></div>
                <Button size="sm" variant="ghost"><Download className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="gradient-sweep">
        <div className="container-wide">
          <SectionHeader badge="Events" title="Upcoming Webinars" />
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {["Getting Started with Digital Estate Planning", "Ask the Experts: Q&A Session", "Advanced Legacy Strategies"].map((title, i) => (
              <div key={title} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
                <Calendar className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1"><h3 className="font-medium text-foreground">{title}</h3><p className="text-xs text-muted-foreground">Coming Q{i + 1} 2025</p></div>
                <Button size="sm" variant="outline">Register</Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Resources;
