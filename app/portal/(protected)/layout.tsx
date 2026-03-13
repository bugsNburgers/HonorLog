import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export default async function PortalProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createServerSupabaseClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/portal/login?reason=expired')
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('id, full_name, global_role, is_active')
        .eq('id', user.id)
        .maybeSingle()

    if (!profile) {
        await supabase.auth.signOut()
        redirect('/portal/login?reason=no_profile')
    }

    if (!profile.is_active) {
        await supabase.auth.signOut()
        redirect('/portal/login?reason=inactive')
    }

    return (
        <div className="space-y-6">
            <header className="panel px-5 py-4 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            HonorLog internal portal
                        </div>
                        <h1 className="mt-1 text-xl font-bold tracking-tight text-foreground">Operations workspace</h1>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Signed in as {profile.full_name || user.email || 'portal user'} ({profile.global_role})
                        </p>
                    </div>

                    <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        <Link href="/portal" className="rounded-full border border-border px-3 py-1.5 transition-colors hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link href="/portal/events" className="rounded-full border border-border px-3 py-1.5 transition-colors hover:text-foreground">
                            Events
                        </Link>
                        <Link href="/portal/logout" className="rounded-full border border-border px-3 py-1.5 transition-colors hover:text-foreground">
                            Logout
                        </Link>
                    </nav>
                </div>
            </header>

            {children}
        </div>
    )
}
