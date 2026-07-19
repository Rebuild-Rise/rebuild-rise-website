import { ModelStep, ModelStepNode } from "@/components/ui/ModelStep";

// The v1 root-line SVGs that lived here were absorbed into the global Path
// (ledger D7): the journey line now threads through these nodes, and each
// node pulses once as the path tip reaches it. Nodes carry data-path-node so
// the Path engine can measure the visible layout's positions.

interface ModelStepData {
  id: string;
  name: string;
  body: string;
  lessonBorn: boolean;
}

interface ModelDiagramProps {
  steps: ModelStepData[];
}

export function ModelDiagram({ steps }: ModelDiagramProps) {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="mb-8 grid h-6 grid-cols-7">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center justify-center">
              <ModelStepNode
                lessonBorn={step.lessonBorn}
                isSustain={step.id === "sustain"}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3">
          {steps.map((step) => (
            <ModelStep
              key={step.id}
              name={step.name}
              body={step.body}
              lessonBorn={step.lessonBorn}
              isSustain={step.id === "sustain"}
              layout="text-only"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:hidden">
        {steps.map((step) => (
          <ModelStep
            key={step.id}
            name={step.name}
            body={step.body}
            lessonBorn={step.lessonBorn}
            isSustain={step.id === "sustain"}
          />
        ))}
      </div>
    </div>
  );
}
