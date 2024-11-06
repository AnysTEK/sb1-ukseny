import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, FolderGit2, GitPullRequestDraft } from "lucide-react"

const stats = [
  {
    title: "Documents internes",
    value: "124",
    icon: FileText,
  },
  {
    title: "Documents externes",
    value: "45",
    icon: FolderGit2,
  },
  {
    title: "Processus",
    value: "12",
    icon: GitPullRequestDraft,
  },
  {
    title: "Utilisateurs",
    value: "23",
    icon: Users,
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
        <p className="text-muted-foreground">
          Bienvenue sur votre espace de gestion documentaire
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}