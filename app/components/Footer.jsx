import Link from 'next/link'
import React from 'react'



const Footer = () => {
  return (
    <div>
  <footer className="border-t bg-muted/50 px-4 py-8">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/javascript:void(0)"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Splitzy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer