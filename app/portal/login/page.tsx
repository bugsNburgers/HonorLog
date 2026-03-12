export default function PortalLoginPage() {
    return (
        <section className="mx-auto flex min-h-[calc(100dvh-9rem)] w-full max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="max-w-2xl">
                    <div className="inline-flex rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm">
                        Internal portal
                    </div>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        HonorLog operations access
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                        This portal is reserved for staff workflows such as event administration, registrar access, controlled imports, and result entry. The public student directory remains separate and unchanged.
                    </p>
                    <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                        <div className="panel-soft p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Admin access</div>
                            <p className="mt-2 leading-6">
                                Full event management, imports, staff access control, and review workflows.
                            </p>
                        </div>
                        <div className="panel-soft p-4">
                            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Registrar access</div>
                            <p className="mt-2 leading-6">
                                Event-scoped result entry only, with no access to global settings or unrelated events.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="panel mx-auto w-full max-w-md p-6 sm:p-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Sign in
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                        Portal login
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        The login UI is now in place. Authentication wiring, role checks, and session protection will be added in the first portal implementation phase.
                    </p>

                    <form className="mt-6 space-y-4" aria-label="Portal login form">
                        <label className="block">
                            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                Email
                            </span>
                            <input
                                type="email"
                                inputMode="email"
                                disabled
                                placeholder="portal access will be enabled next"
                                className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground outline-none placeholder:text-muted-foreground/55"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                Password
                            </span>
                            <input
                                type="password"
                                disabled
                                placeholder="authentication not enabled yet"
                                className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground outline-none placeholder:text-muted-foreground/55"
                            />
                        </label>

                        <button
                            type="button"
                            disabled
                            className="inline-flex w-full items-center justify-center rounded-full bg-primary/35 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/85 opacity-80"
                        >
                            Authentication setup pending
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}