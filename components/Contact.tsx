import { Mail, PhoneForwarded } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-surface py-24 px-6" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight font-mono">
          <span className="text-secondary">$</span> curl -X POST /contact
        </h2>
        <p className="text-secondary mb-12 font-mono text-sm">
          // API endpoint for getting in touch
        </p>

        {/* API Request/Response Format */}
        <div className="bg-background border border-border rounded-lg p-6 md:p-8 mb-8">
          <div className="font-mono text-sm md:text-base space-y-2">
            <div className="text-secondary">POST /contact HTTP/1.1</div>
            <div className="text-secondary">Host: azmon.dev</div>
            <div className="text-secondary">Content-Type: application/json</div>
            <div className="my-4" />
            <div className="text-foreground">&#123;</div>
            <div className="pl-4 text-foreground">
              <span className="text-secondary">"email":</span> <span className="text-accent">"akap@azmon.dev"</span>,
            </div>
            <div className="pl-4 text-foreground">
              <span className="text-secondary">"phone":</span> <span className="text-accent">"+1-506-269-8812"</span>,
            </div>
            <div className="pl-4 text-foreground">
              <span className="text-secondary">"location":</span> <span className="text-accent">"Toronto, CA"</span>,
            </div>
            <div className="pl-4 text-foreground">
              <span className="text-secondary">"availability":</span> <span className="text-green-500">true</span>
            </div>
            <div className="text-foreground">&#125;</div>
            <div className="my-4" />
            <div className="text-green-500">Response: 200 OK</div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:akap@azmon.dev"
            className="flex items-start gap-4 bg-background border border-border p-6 hover:border-foreground transition-colors duration-300 group"
          >
            <div className="p-3 bg-surface border border-border">
              <Mail className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-mono text-foreground mb-1">Email</h3>
              <p className="text-secondary font-mono text-sm group-hover:text-foreground transition-colors">
                akap@azmon.dev
              </p>
            </div>
          </a>

          <a
            href="tel:+15062698812"
            className="flex items-start gap-4 bg-background border border-border p-6 hover:border-foreground transition-colors duration-300 group"
          >
            <div className="p-3 bg-surface border border-border">
              <PhoneForwarded className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-mono text-foreground mb-1">Phone</h3>
              <p className="text-secondary font-mono text-sm group-hover:text-foreground transition-colors">
                +1 (506) 269-8812
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
