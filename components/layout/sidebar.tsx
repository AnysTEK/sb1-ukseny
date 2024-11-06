import { FileText, FolderGit2, GitPullRequestDraft, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const routes = [
  {
    label: "Tableau de bord",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Documents internes",
    icon: FileText,
    href: "/documents/internes",
  },
  {
    label: "Documents externes",
    icon: FolderGit2,
    href: "/documents/externes",
  },
  {
    label: "Processus",
    icon: GitPullRequestDraft,
    href: "/processus",
  },
]

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary/50 text-secondary-foreground">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}