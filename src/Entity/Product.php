<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $buyprice;

    /**
     * @ORM\Column(type="float")
     */
    private $sellprice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $tags = [];

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdtime;

    /**
     * @ORM\Column(type="datetime")
     */
    private $modifiedtime;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $stock;

    /**
     * @ORM\OneToMany(targetEntity=OrderProduct::class, mappedBy="productid")
     */
    private $orderProducts;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imagesource;

    public function __construct()
    {
        $this->orderProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBuyprice(): ?float
    {
        return $this->buyprice;
    }

    public function setBuyprice(?float $buyprice): self
    {
        $this->buyprice = $buyprice;

        return $this;
    }

    public function getSellprice(): ?float
    {
        return $this->sellprice;
    }

    public function setSellprice(float $sellprice): self
    {
        $this->sellprice = $sellprice;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getTags(): ?array
    {
        return $this->tags;
    }

    public function setTags(?array $tags): self
    {
        $this->tags = $tags;

        return $this;
    }

    public function getCreatedtime(): ?\DateTimeInterface
    {
        return $this->createdtime;
    }

    public function setCreatedtime(\DateTimeInterface $createdtime): self
    {
        $this->createdtime = $createdtime;

        return $this;
    }

    public function getModifiedtime(): ?\DateTimeInterface
    {
        return $this->modifiedtime;
    }

    public function setModifiedtime(\DateTimeInterface $modifiedtime): self
    {
        $this->modifiedtime = $modifiedtime;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    /**
     * @return Collection|OrderProduct[]
     */
    public function getOrderProducts(): Collection
    {
        return $this->orderProducts;
    }

    public function addOrderProduct(OrderProduct $orderProduct): self
    {
        if (!$this->orderProducts->contains($orderProduct)) {
            $this->orderProducts[] = $orderProduct;
            $orderProduct->setProductid($this);
        }

        return $this;
    }

    public function removeOrderProduct(OrderProduct $orderProduct): self
    {
        if ($this->orderProducts->removeElement($orderProduct)) {
            // set the owning side to null (unless already changed)
            if ($orderProduct->getProductid() === $this) {
                $orderProduct->setProductid(null);
            }
        }

        return $this;
    }

    public function getImagesource(): ?string
    {
        return $this->imagesource;
    }

    public function setImagesource(string $imagesource): self
    {
        $this->imagesource = $imagesource;

        return $this;
    }
}
