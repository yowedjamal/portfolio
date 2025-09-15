import { Navbar } from '@/components/navbar-new';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-center mb-8">
            {locale === 'en' ? 'Welcome to my Portfolio' : 'Bienvenue sur mon Portfolio'}
          </h1>
          <p className="text-lg text-center text-muted-foreground">
            {locale === 'en' 
              ? 'DevOps Expert & Full-Stack Developer' 
              : 'Expert DevOps & Développeur Full-Stack'
            }
          </p>
        </div>
      </main>
    </>
  );
}