export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}){
  return(
    <div className="w-full md:max-w-[1170px] mx-auto min-h-screen flex justify-start items-start pb-20 gap-16 mt-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  )
}