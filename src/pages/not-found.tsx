import { useParams } from 'react-router';

export default function NotFoundPage() {
  const params = useParams();

  return (
    <div className="h-svh grid place-content-center">
      <div className="bg-card rounded-2xl max-w-2xl mx-auto space-y-3 text-neutral-500 p-4">
        <span className="text-sm text-red-700">Error 404</span>
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore voluptatum ipsum temporibus facere
          tenetur facilis exercitationem architecto ipsam quis sint totam laborum dolore eaque, pariatur deleniti. Non,
          beatae consequuntur.
        </p>
        <pre>
          {params['*']?.split('/').map((path, i) => (
            <p key={i + path}>{path}</p>
          ))}
        </pre>
      </div>
    </div>
  );
}
