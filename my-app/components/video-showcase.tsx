import Image from "next/image"

export function VideoShowcase() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-full">
          <div className="absolute top-[10%] left-[10%] transform -rotate-12">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/584848767654_6e6a9a66-b411-4ab3-879c-2999dd7fad5e-FN5isGQliHEPGBTXq7q5ktAlqXJJJo.webp"
                width={300}
                height={600}
                alt="Person in autumn setting"
                className="object-cover h-[500px]"
                priority
              />
            </div>
          </div>
          <div className="absolute top-[5%] left-[50%] transform -translate-x-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1029384756_1042baa6-612c-4a26-95fa-9adbb64bb1e3-Ny9QvKrluEerBO57cIj0BGrnMzhPVN.webp"
                width={300}
                height={600}
                alt="Person in Paris"
                className="object-cover h-[500px]"
                priority
              />
            </div>
          </div>
          <div className="absolute top-[10%] right-[10%] transform rotate-12">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5647382910_a4c401eb-00a0-4882-8299-6a83d15d6e29-DZetKpNUlcfunglBRMezEgbkARjqVO.webp"
                width={300}
                height={600}
                alt="Person hiking in mountains"
                className="object-cover h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

