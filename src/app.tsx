import React, { Activity, Suspense } from 'react';
import { cn } from './lib/utils';
import Example from './example';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<'1' | '2'>('1');

  const renderContent = () => {
    return (
      <React.Fragment>
        <Activity mode={activeTab === '1' ? 'visible' : 'hidden'}>
          <Tab1 />
        </Activity>

        <Activity mode={activeTab === '2' ? 'visible' : 'hidden'}>
          <Tab2 />
        </Activity>
      </React.Fragment>
    );
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto p-10">
      <div className="flex items-center gap-2">
        <button
          className={cn('rounded-2xl px-3 py-1 border bg-neutral-600', { 'bg-indigo-500': activeTab === '1' })}
          onClick={() => setActiveTab('1')}>
          Tab 1
        </button>
        <button
          className={cn('rounded-2xl px-3 py-1 border bg-neutral-600', { 'bg-indigo-500': activeTab === '2' })}
          onClick={() => setActiveTab('2')}>
          Tab 2
        </button>
      </div>

      <div className="bg-neutral-800 p-3 rounded-xl">{renderContent()}</div>
    </div>
  );
}

function Tab1() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    return () => {
      console.log('cleaning tab 1');
    };
  }, []);

  return (
    <main className="*:last:mt-5">
      <h1>Tab 1</h1>
      <form>
        <input placeholder="Enter some text" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Suspense fallback="Loading...">
        <Example name="Tab 1" />
      </Suspense>
    </main>
  );
}

function Tab2() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    return () => {
      console.log('cleaning tab 2');
    };
  }, []);

  return (
    <main className="*:last:mt-5">
      <h1>Tab 2</h1>
      <form>
        <input placeholder="Enter some text" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Suspense fallback="Loading...">
        <Example name="Tab 2" />
      </Suspense>
    </main>
  );
}
