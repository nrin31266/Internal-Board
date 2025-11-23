import {
  Github,
  Mail,
  Building2,
  BookOpen,
  ListChecks,
  Heart,
  ExternalLink
} from "lucide-react";

const AppFooter = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-600">

        {/* Column 1 - About */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Building2 size={18} />
            About Internal Board
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Internal Board is a lightweight public workspace for teams to create projects,
            add tasks, and track progress together. No login required — anyone on the network
            can view and contribute.
          </p>
        </div>

        {/* Column 2 - Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen size={18} />
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                className="flex items-center gap-2 hover:text-gray-900 transition"
                href="#how-it-works"
              >
                How it works <ExternalLink size={14} />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-gray-900 transition"
                href="#api-docs"
              >
                API Docs (Swagger) <ExternalLink size={14} />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-gray-900 transition"
                href="#deployment"
              >
                Deployment Guide <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Features */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <ListChecks size={18} />
            Features
          </h3>
          <ul className="space-y-2 text-gray-500">
            <li>Create and manage projects</li>
            <li>Add tasks with assignees</li>
            <li>Mark tasks done via end date</li>
            <li>Persistent data with PostgreSQL</li>
            <li>Docker Compose one-command deploy</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:nrin31266@gmail.com"
                className="hover:text-gray-900"
              >
                nrin31266@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Github size={16} />
              <a
                href="https://github.com/your-org"
                className="hover:text-gray-900"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom row */}
      <div className="border-t py-3 text-center text-gray-500 text-sm flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Internal Board — built with
        <Heart size={14} className="text-red-500" /> for team productivity.
      </div>
    </footer>
  );
};

export default AppFooter;
