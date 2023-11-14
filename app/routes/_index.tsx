import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index(): JSX.Element {
  return (
    <main>
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-fixed bg-black opacity-60">
          <video
            autoPlay
            loop
            muted
            className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block"
          >
            <source src="forestHD.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
